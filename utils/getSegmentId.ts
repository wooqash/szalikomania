export const getSegmentId = (str: string) => {
    str = decodeURIComponent(str);
    str = str?.replace(/^\s+|\s+$/g, "");
    str = str?.toLowerCase();
    const from = "ąęśćżźńłóàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    const   to = "aesczznloaaaaaeeeeiiiioooouuuunc------";
    
    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    str = str
        ?.replace(/[^a-zA-Z0-9 -]/g, "")
        .replace(/\d+/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    
    return str;
};
