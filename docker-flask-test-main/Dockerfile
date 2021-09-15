
FROM python:3.6.1-alpine

WORKDIR /docker-flask-test

ADD . /docker-flask-test

ENV IN_DOCKER_CONTAINER Yes

RUN pip install -r requirements.txt

CMD ["python","app.py"]
EXPOSE 4444