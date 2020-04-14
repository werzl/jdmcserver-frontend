import $ from "jquery";

class StopServerAjaxHelper {
    static async post(apiKey) {
        return await $.ajax({
            type: "POST",
            url: "https://03hnoouy54.execute-api.eu-west-2.amazonaws.com/live/stop-ec2-instance",
            data: "",
            beforeSend: (xhr) => { xhr.setRequestHeader("x-api-key", apiKey); }
        }).then(
            (result) => { return result; },
            (result) => { return result; }
        );
    }
}

export default StopServerAjaxHelper;