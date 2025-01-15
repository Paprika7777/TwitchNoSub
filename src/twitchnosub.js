window.Worker = class Worker extends oldWorker {
    constructor(twitchBlobUrl) {
        super(twitchBlobUrl);

        this.addEventListener("message", (event) => {
            const data = event.data;

            if ((data.id == 1 || isVariantA) && data.type == 1) {
                const newData = event.data;

                newData.arg = [data.arg];

                this.postMessage(newData);
            }
        });
    }
}
