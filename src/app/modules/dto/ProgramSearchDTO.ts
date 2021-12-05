export default class ProgramSearchDTO{
  private _startDate:string;
  private _endDate:string;

  constructor(startDate: string, endDate: string) {
    this._startDate = startDate;
    this._endDate = endDate;
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
