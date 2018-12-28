/*
 * l10n
 *
 * By Ivan Pintar, http://www.pintar-ivan.com
 * Licensed under the MIT License
 * See https://github.com/pIvan/file-upload/blob/master/README.md
 */
import { NgModule, Injector } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FileUploadComponent } from './components/file-upload.component';
import { FileUploadListItemComponent } from './components/file-upload-list-item.component';
import { FileUploadIconComponent } from './components/file-upload-icon.component';
import { FileUploadAttributeComponent } from './components/file-upload-attr.component';

import { FileSizeValidator, FilesLimitValidator, FilesAcceptValidator } from './directives/validators.directive';


export { FileUploadControl } from './helpers/control.class';
export { FileUploadValidators, ValidationErrors, ValidatorFn } from './helpers/validators.class';
export { FileUploadTypes } from './helpers/file-types.class';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    declarations: [
        FileUploadComponent,
        FileUploadListItemComponent,
        FileUploadIconComponent,

        FileUploadAttributeComponent,

        FileSizeValidator,
        FilesLimitValidator,
        FilesAcceptValidator
    ],
    exports: [
        FileUploadComponent,
        FileUploadAttributeComponent,

        FileSizeValidator,
        FilesLimitValidator,
        FilesAcceptValidator
    ],
    entryComponents: [
        FileUploadComponent
    ]
})
export class FileUploadModule {

    constructor(private injector: Injector) {
        // const fileUploadElement = createCustomElement(FileUploadComponent, { injector });
        // customElements.define('file-upload', fileUploadElement);
    }

    ngDoBootstrap() {}
}
