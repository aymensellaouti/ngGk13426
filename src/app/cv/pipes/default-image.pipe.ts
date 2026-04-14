import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONFIG } from 'src/app/config/app-const.config';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    return path.trim() ? path : APP_CONFIG.defaultImage;
  }

}
