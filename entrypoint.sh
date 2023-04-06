#!/bin/sh
echo "$DJANGO_SETTINGS_MODULE"
python manage.py flush --no-input
python manage.py migrate
#python manage.py collectstatic

exec "$@"
