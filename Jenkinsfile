pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'manoharbarre'
        IMAGE_NAME = 'nodejs-app'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/manohar-b29/node-js.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "sudo docker build -t ${DOCKERHUB_USER}/${IMAGE_NAME}:latest ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub_creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh """
                        echo \$PASSWORD | sudo docker login -u \$USERNAME --password-stdin
                        sudo docker push ${DOCKERHUB_USER}/${IMAGE_NAME}:latest
                        sudo docker logout
                    """
                }
            }
        }

        stage('Run Container') {
            steps {
                sh """
                    sudo docker rm -f nodejs-container || true
                    sudo docker run -d --name nodejs-container -p 8043:8043 ${DOCKERHUB_USER}/${IMAGE_NAME}:latest
                """
            }
        }
    }
}

