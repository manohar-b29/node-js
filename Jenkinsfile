pipeline {
    agent {label: 'node1'}`:

    stages {
        stage('Checkout') {
            steps {
                git branch: 'feature', url: 'https://github.com/manohar-b29/node-js.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build & Push') {
            steps {
                sh 'docker build -t your-dockerhub-username/node-js-app .'
                sh 'docker push your-dockerhub-username/node-js-app'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage (add your deployment steps here)'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}

