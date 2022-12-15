module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: "strapi-provider-upload-imagekit",  // Community providers need to have the full package name
            providerOptions: {
                publicKey: "public_NboIfBMdoN4IjgtaRlx+P9rmfis=",
                privateKey: "private_oZEvC2h4kktq5SpHI25f9S1cBMQ=",
                urlEndpoint: "https://imagekit.io/dashboard/url-endpoints/lksjdf7sd",  // Example: https://ik.imagekit.io/username

                // Optional
                params: {
                    folder: "/production/images"  // Defaults to "/" if value is not supplied
                }
            }
        }
    }
});