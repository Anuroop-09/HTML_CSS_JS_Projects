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
            },
            {
                userId: "003",
                label: "(stageportal) apamarthi+stagecr1@vidalung.ai",
                secretKey: "AUZ56UG5ISTVPF2QQRVS2J4NOMIVHAKFJZXQ7ZOFWG5T73F65OQA"
            },
            {
                userId: "004",
                label: "(stageportal) prtladmvida+pm2312@gmail.com",
                secretKey: "M7Q2QXKV6HMMEU2XGQTZVMSVAM2RCZTBD7DRNM5JR5BUDVTOI5OQ"
            },
            {
                userId: "005",
                label: "(stageportal) prtladmvida+cr2312@gmail.com",
                secretKey: "WKZL6NNGNDBNCR6ZDK5TPDEFBWEFJCD6XNUOYUPIPMY5CU4YVRWQ"
            }
        ]
    },
    mpt: {
        sectionId: "mpt",
        sectionTitle: "vida | osic - mpt",
        listOfUsers: [
            {
                userId: "001",
                label: "(mptportal) dkanchibotlano@vidalung.ai",
                secretKey: "DM3L2JM6XNQAZGCAUFRJQOXG3XP42IUX5JZYJB5YHTVBOD6D42MQ"
            },
	    {
                userId: "002",
                label: "(mptportal) apamarthi@vidalung.ai",
                secretKey: "DYWM2CLTGMMA5LFWNSVFUE44GMMW42FAWCUURRFXFQ35XGZT3KYQ"
            },
	    {
                userId: "003",
                label: "(mptportal) apamarthi+mpt_pm@vidalung.ai",
                secretKey: "T3VDKCCDGGZW4WGM4BKQLPNHAJKJ5GWEW4RM2WPEIBI42NGNP7XQ"
            }
        ]
    },
    prod: {
        sectionId: "prod",
        sectionTitle: "vida | osic - prod",
        listOfUsers: [
            {
                userId: "001",
                label: "(portal) dkanchibotlano@vidalung.ai",
                secretKey: "632RSQQJKGE37TUHKUNHXTYCB5AKLHMBHT3TCACMVJY74QNBZTLQ"
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