from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin, UserManager
from django.core.validators import EmailValidator
from django.contrib.auth.validators import ASCIIUsernameValidator
from django.utils.translation import gettext_lazy as _


class AppUserManager(UserManager):
    def get_by_natural_key(self, username):
        case_insensitive_username_field = '{}__iexact'.format(self.model.USERNAME_FIELD)
        return self.get(**{case_insensitive_username_field: username})


class AppUser(AbstractBaseUser, PermissionsMixin):
    email_validator = EmailValidator()
    username_validator = ASCIIUsernameValidator()

    username = models.CharField(
        _("username"),
        max_length=150,
        unique=True,
        help_text=_("Required. 150 characters or fewer. ASCII letters and digits only."),
        validators=[username_validator],
        error_messages={
            "unique": _("A user with that username already exists."),
        },
    )
    active = models.BooleanField(
        _("active"),
        default=True,
        help_text=_(
            "Designates whether this user should be treated as active. \
            Unselect this instead of deleting accounts."
        ),
    )
    email = models.CharField(
        _("email address"),
        max_length=256,
        unique=True,
        null=True,
        validators=[username_validator],
        error_messages={
            "unique": _("A user with that email address already exists."),
        },
    )
    first_name = models.CharField(_("first name"), max_length=150, blank=True)
    last_name = models.CharField(_("last name"), max_length=150, blank=True)
    age = models.PositiveIntegerField(blank=True, null=True)

    objects = AppUserManager()

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]