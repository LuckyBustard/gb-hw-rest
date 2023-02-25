FROM python:3.11-buster

RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		postgresql-client \
	&& rm -rf /var/lib/apt/lists/*

RUN mkdir -p /opt/app
WORKDIR /opt/app

RUN pip install --upgrade pip
COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY entrypoint.sh /usr/bin/entrypoint.sh
RUN sed -i 's/\r$//g' /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh


EXPOSE 8000
CMD ["/usr/bin/entrypoint.sh"]