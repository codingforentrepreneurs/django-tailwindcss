build:
	docker build -t django-tailwindcss -f Dockerfile . 

run:
	docker run -p 8200:80 --name django-tailwindcss --rm  django-tailwindcss

stop:
	docker stop django-tailwindcss

push:
	docker build --platform=linux/amd64 -t codingforentrepreneurs/django-tailwindcss:latest -f Dockerfile . 
	docker push codingforentrepreneurs/django-tailwindcss