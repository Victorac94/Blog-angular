import { FilePreviewModel } from 'ngx-awesome-uploader';
import { FilePickerAdapter } from 'ngx-awesome-uploader';
import { HttpRequest, HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class FileUploaderAdapter extends FilePickerAdapter {

    constructor(private http: HttpClient) {
        super();
    }

    public uploadFile(fileItem: FilePreviewModel): Observable<string> {
        console.log(fileItem);
        console.log(fileItem);
        const form = new FormData();
        form.append('file', fileItem.file);
        // const api = 'https://demo-file-uploader.free.beeceptor.com';
        const api = '/b/blog-bc350.appspot.com/o';
        const req = new HttpRequest('POST', api, form, { reportProgress: true });
        return this.http.request(req)
            .pipe(
                map((res: HttpEvent<any>) => {
                    if (res.type === HttpEventType.Response) {
                        return res.body.id.toString();
                    } else if (res.type === HttpEventType.UploadProgress) {
                        // Compute and show the % done:
                        const UploadProgress = +Math.round((100 * res.loaded) / res.total);
                        return UploadProgress;
                    }
                })
            );
    }
    public removeFile(fileItem): Observable<any> {
        const removeApi = '/b/blog-bc350.appspot.com/o';
        return this.http.post(removeApi, {});
    }
}