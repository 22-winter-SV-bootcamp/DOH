![header](https://capsule-render.vercel.app/api?type=waving&color=9DCEFF&height=230&section=header&text=Simson%20Film&fontSize=60&animation=fadeIn&fontAlignY=38&desc=Leave%20your%20outfit%20with%20Simson%20Film&fontColor=ffffff&descAlignY=51&descAlign=50)
  </a>
</p>

## System Architecture
<img src="https://user-images.githubusercontent.com/111681258/216720854-8dcc8575-e02c-4668-8e0a-ae44574b8257.png">

<details>
<summary>Infra</summary>
<div markdown="1">

<img src="https://user-images.githubusercontent.com/111681258/216727120-576ea693-727f-4fce-af85-dffbbf6d5c88.png">
  
</div>
</details>
<hr>

## 📹 Demo
- __AI analyzes fashion when uploading photos__
<img src="https://user-images.githubusercontent.com/111681258/216731600-7ac48afa-bced-4d6f-aeed-459b584d16a5.mp4">

- __custom features__
<img src="https://user-images.githubusercontent.com/111681258/216732713-9b182c49-5c51-42db-a5f1-8757fa169c5b.mp4">

- __Full video__
<img src="https://user-images.githubusercontent.com/111681258/216733600-c8e0818c-43b5-401e-8d75-f30c9df85eb1.mp4">

<hr>

## 📚 Tech Stack
|Frontend|<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=yellow"> <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">|
|:----------:|:-------------:|
|__Backend__|<img src="https://img.shields.io/badge/django-092E20.svg?style=for-the-badge&logo=django&logoColor=white"> <img src="https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray"> <img src="https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=Gunicorn&logoColor=black"> <img src="https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=RabbitMQ&logoColor=black"> <img src="https://img.shields.io/badge/-NGINX-%23009639?style=for-the-badge&logo=NGINX&logoColor=white"> <img src="https://img.shields.io/badge/Swagger-85EA2D.svg?style=for-the-badge&logo=Swagger&logoColor=black"> <img src="https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white"> <img src="https://img.shields.io/badge/Celery-37814A.svg?style=for-the-badge&logo=Celery&logoColor=white">|
|__DevOps__|<img src="https://img.shields.io/badge/docker-2496ED.svg?style=for-the-badge&logo=docker&logoColor=white"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white"> <img src="https://img.shields.io/badge/AmazonS3-569A31?style=for-the-badge&logo=AmazonS3&logoColor=white"> <img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=for-the-badge&logo=Amazon#20RDS&logoColor=black"> <img src="https://img.shields.io/badge/CloudFront-D05C4B?style=for-the-badge&logo=Amazon AWS&logoColor=white"> |
|__DB__|<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=black">|
|__AI__|<img src="https://img.shields.io/badge/YOLOv5-00FFFF?style=for-the-badge&logo=YOLO&logoColor=black"> <img src="https://img.shields.io/badge/Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&logoColor=white"> <img src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white">|
|__Monitoring__|<img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white"> <img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=Grafana&logoColor=white">|
|__Others__|<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/GitKraken-179287?style=for-the-badge&logo=GitKraken&logoColor=white"> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/zoom-2496ED?style=for-the-badge&logo=zoom&logoColor=white"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">|

<hr>

## 📖 ERD Diagram
<img src="https://user-images.githubusercontent.com/111681258/216684272-0af06a08-fa4b-4b52-9fdb-a850396c5bc4.jpg">
<hr>

## api 문서
<details>
<summary>Swagger</summary>
<div markdown="1">

<img src="https://user-images.githubusercontent.com/111681258/216641873-d2c6a374-acc7-49b5-99c6-dd8dceefe390.png">
  
</div>
</details>
<hr>

## 📂 file tree (directory structure)

<details>
<summary> File Tree </summary>
<div markdown="1">

```txt
frontend
├── node_modules
├── public
│   └── assets
└── src
    ├── apis
    ├── components
    ├── mocks
    ├── pages
    ├── router
    ├── svgComponents
    └── utils
```
  
```txt
backend
├── ai
│   ├── ai
│   └── images
├── backend
│   ├── backend
│   ├── images
│   └── styles
├── monitoring
│   ├── alertmanager
│   ├── grafana
│   └── prometheus
└── nginx
 ```
</div>
</details>
  
<hr>

## 🤖 AI
- __AI Flow__
<img src="https://user-images.githubusercontent.com/111681258/216724507-dd206051-b59b-498b-8333-ce8ed3b328b6.png">

- __Asynchronous Processing__
<img src="https://user-images.githubusercontent.com/111681258/216725345-417685dd-96af-4026-ba0c-c61329acff73.png">
<img src="https://user-images.githubusercontent.com/111681258/216725638-75504a89-9517-4242-8588-0beaa61c18d2.png">
     
<hr>

## 🖥️ Monitoring
<img src="https://user-images.githubusercontent.com/111681258/216723663-a458c419-1482-4ee5-9502-2c47e272d425.png">

<hr>

## 👨‍💻 👩‍💻 Member
|Name|김유림|김정모|구소현|전종훈|정대영|안정민|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|__role__|Team Leader,</br>Frontend&Backend|Backend|Backend|Frontend|Frontend|Frontend|
|__Github__|[@Ellie010707](https://github.com/Ellie010707)|[@alex052525](https://github.com/alex052525)|[@Sohyeon-Koo](https://github.com/Sohyeon-Koo)|[@JunJongHun](https://github.com/JunJongHun)|[@DaeYoungee](https://github.com/DaeYoungee)|[@dengminie](https://github.com/dengminie)|
