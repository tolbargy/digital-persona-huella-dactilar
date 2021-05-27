// NOTE: make sure you import only WebSdk typings here, not a WebSdk code!
// Also make sure this is not a NodeJS module. WebSdk is a browser-only library!
import '../../assets/web-sdk';

import { FingerprintReader, SampleFormat, SamplesAcquired } from '@digitalpersona/devices';

export class FingerprintSigninControl {
    private reader: FingerprintReader;

    init() {
        console.log("init");
        this.reader = new FingerprintReader();
        this.reader.on("DeviceConnected", this.onDeviceConnected);
        this.reader.on("DeviceDisconnected", this.onDeviceDisconnected);
        this.reader.on("QualityReported", this.onQualityReported);
        this.reader.on("SamplesAcquired", this.onSamplesAcquired);
        this.reader.on("ErrorOccurred", this.onReaderError);
    }

    // Event handlers.
    private onDeviceConnected = (event: any) => {
        console.log("onDeviceConnected");
    }
    private onDeviceDisconnected = (event: any) => {
        console.log("onDeviceDisconnected");
    };
    private onQualityReported = (event: any) => {
        console.log("onQualityReported");
    };
    private onSamplesAcquired = (event:any) => {
        console.log("onSamplesAcquired");
        try {
            const samples = event.samples;
            console.log(samples);
        }
        catch (error) {
            console.log(error);
        }
    };
    private onReaderError = (event: any) => {
        console.log("onReaderError");
    };

    async start() {
        try {
            console.log("before start");

            let devices = await this.reader.enumerateDevices();
            let deviceInfo = await this.reader.getDeviceInfo(devices[0]);
            let sample = await this.reader.startAcquisition(SampleFormat.PngImage);


            console.log(sample);
            console.log(devices);
            console.log(deviceInfo);


            console.log("after start");
        } catch (err) {
            console.log(err);
        }
    }


}
