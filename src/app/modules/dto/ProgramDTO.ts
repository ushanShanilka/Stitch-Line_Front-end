export default class ProgramDTO{
  private _name:string;
  private _description:string;
  private _start_date:string;
  private _end_date:string;


  constructor(name: string, description: string, start_date: string, end_date: string) {
    this._name = name;
    this._description = description;
    this._start_date = start_date;
    this._end_date = end_date;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get start_date(): string {
    return this._start_date;
  }

  set start_date(value: string) {
    this._start_date = value;
  }

  get end_date(): string {
    return this._end_date;
  }

  set end_date(value: string) {
    this._end_date = value;
  }
}
