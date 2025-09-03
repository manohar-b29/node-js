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
                script {
                    sh """
                        docker build -t ${DOCKERHUB_USER}/${IMAGE_NAME}:latest .
                    """
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub_creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh """
                        echo $PASSWORD | docker login -u $USERNAME --password-stdin
                        docker push ${DOCKERHUB_USER}/${IMAGE_NAME}:latest
                        docker logout
                    """
                }
            }
        }

        stage('Run Container') {
            steps {
                
                    sh """
                        docker rm -f nodejs-container || true
                        docker run -d --name nodejs-container -p 8043:8043 ${DOCKERHUB_USER}/${IMAGE_NAME}:latest
                    """
                
            }
        }
    }

    post {
        success {
            echo 'Artifact created, Docker image pushed, and container running on port 8043.'
        }
    }
}

