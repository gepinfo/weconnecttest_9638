module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "employee-9638",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-weconnecttest-9638-employee:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8023",
                    "protocol": "tcp",
                    "hostPort": "8023"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@weconnecttest.local:27017/weconnecttest_9638?authSource=admin"},{"name":"MONGO_DOMAIN","value":"weconnecttest.local"},{"name":"CAMUNDAPOD_URL","value":"http://weconnecttest.local:8080"},{"name":"SECURITYURL","value":"http://weconnecttest.local:8003"},{"name":"AUTHPROXYURL","value":"http://weconnecttest.local:8001"},{"name":"ADMINURL","value":"http://weconnecttest.local:8004"},{"name":"CAMUNDAURL","value":"http://weconnecttest.local:8002"},{"name":"GCAMURL","value":"http://weconnecttest.local:8007"},{"name":"APIGATEWAY","value":"http://weconnecttest.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "weconnecttest"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/weconnecttest",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "role-9638",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-weconnecttest-9638-role:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8024",
                    "protocol": "tcp",
                    "hostPort": "8024"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@weconnecttest.local:27017/weconnecttest_9638?authSource=admin"},{"name":"MONGO_DOMAIN","value":"weconnecttest.local"},{"name":"CAMUNDAPOD_URL","value":"http://weconnecttest.local:8080"},{"name":"SECURITYURL","value":"http://weconnecttest.local:8003"},{"name":"AUTHPROXYURL","value":"http://weconnecttest.local:8001"},{"name":"ADMINURL","value":"http://weconnecttest.local:8004"},{"name":"CAMUNDAURL","value":"http://weconnecttest.local:8002"},{"name":"GCAMURL","value":"http://weconnecttest.local:8007"},{"name":"APIGATEWAY","value":"http://weconnecttest.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "weconnecttest"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/weconnecttest",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "weconnecttest",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "weconnecttest0",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
