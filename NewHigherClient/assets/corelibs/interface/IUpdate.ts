export default interface IUpdate
{
    Update(dt: number): void;
    GetName?(): string;
}