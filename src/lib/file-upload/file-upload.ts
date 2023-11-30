import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers"

/**
 * @param {File} file 
 */
export async function uploadFile(file: File, key: string) {
    const s3 = new S3Client({
        region: "us-east-1",
        credentials: fromCognitoIdentityPool({
            identityPoolId: "us-east-1:ecb041b7-1150-478e-b82a-becb32d12f6f",
            clientConfig: {
                region: "us-east-1"
            }
        })
    })
    const putObject = new PutObjectCommand({
        Bucket: "storyteller-sounds",
        Key: key,
        Body: file,
    })
    return await s3.send(putObject)
}