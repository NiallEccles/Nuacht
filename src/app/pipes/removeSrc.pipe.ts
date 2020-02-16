import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "removeSrc" })
export class RemoveSrc implements PipeTransform {
  transform(value: string): string {
    return value.substr(0, value.lastIndexOf("-"));;
  }
}
