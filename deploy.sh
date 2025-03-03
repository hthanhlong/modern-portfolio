
docker stop modern-portfolio-container
docker rm modern-portfolio-container
docker rmi modern-portfolio-image
docker build -t modern-portfolio-image .
docker run -d -p 3000:3000 --name modern-portfolio-container -d modern-portfolio-image
