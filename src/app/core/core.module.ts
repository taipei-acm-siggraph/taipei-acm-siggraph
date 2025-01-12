import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SafePipe } from '@core/pipe/safe.pipe';
import { MarkdownPipe } from '@core/pipe/markdown.pipe';
import { MatLinkPreviewModule } from '@angular-material-extensions/link-preview';

@NgModule({
  // declarations: [SafePipe, MarkdownPipe],
  imports: [ MatLinkPreviewModule, MatLinkPreviewModule.forRoot()],
  exports: [ MatLinkPreviewModule, MatLinkPreviewModule.forRoot(), SafePipe, MarkdownPipe],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ],
})
export class CoreModule { }
