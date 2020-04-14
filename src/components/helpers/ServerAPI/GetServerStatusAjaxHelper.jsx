import $ from "jquery";

class GetServerStatusAjaxHelper {
    static async get(apiKey) {
        return await $.ajax({
            type: "GET",
            url: "https://03hnoouy54.execute-api.eu-west-2.amazonaws.com/live/get-ec2-status",
            data: "",
            beforeSend: (xhr) => { xhr.setRequestHeader("x-api-key", apiKey); }
        }).then(
            (result) => { return result; },
            (result) => { return result; }
        );
    }
}

export default GetServerStatusAjaxHelper;