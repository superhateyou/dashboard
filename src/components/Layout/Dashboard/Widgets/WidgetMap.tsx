import { Note } from './Note';
import { Gallery } from './Gallery';
import { Label } from './Label';

export const WidgetMap:Map<string, any> = new Map([
  ['note', Note],
  ['gallery', Gallery],
  ['label', Label],
]);
