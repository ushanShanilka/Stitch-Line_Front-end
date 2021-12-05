export default class ProgramDTO{
  private _name:string;
  private _description:string;
  private _startDate:string;
  private _endDate:string;

  constructor(name: string, description: string, startDate: string, endDate: string) {
    this._name = name;
    this._description = description;
    this._startDate = startDate;
    this._endDate = endDate;
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

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }
}
