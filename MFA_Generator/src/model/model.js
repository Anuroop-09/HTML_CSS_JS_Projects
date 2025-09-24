export const state = {
    intervals: []
}

export const data = {
    stage: {
        sectionId: "stage",
        sectionTitle: "vida | osic - stage",
        listOfUsers: [
            {
                userId: "001",
                label: "(stageportal) prtlAdmVida+12345@gmail.com",
                secretKey: "K456QVMS24NAZUDCKFACUVKQWLCV5QCM7TV5L4HJI7R3I4LNRRKQ"
            },
            {
                userId: "002",
                label: "(stageportal) apamarthi@vidalung.ai",
                secretKey: "PEP7WFZ34XZLCMGEYISXMZGV3SWE5SK2L4Q3AOU76QJUDB64HDYA"
            }
        ]
    },
    mpt: {
        sectionId: "mpt",
        sectionTitle: "vida | osic - mpt",
        listOfUsers: [
            {
                userId: "001",
                label: "(stageportal) dkanchibotlano@vidalung.ai",
                secretKey: "DM3L2JM6XNQAZGCAUFRJQOXG3XP42IUX5JZYJB5YHTVBOD6D42MQ"
            }
        ]
    }
}

export const getMFACode = function(userData) {
    const totp = new OTPAuth.TOTP({
        issuer: 'vidalung',
        label: userData.label,
        algorithm: 'SHA1',
        digits: 6,
        period: 30,
        secret: userData.secretKey,
    });
    const otpCode = totp.generate();
    return otpCode;
}