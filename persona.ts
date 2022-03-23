import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { telefono } from "./telefono";

export class Persona{
    private _nombre: string;
    public get nombre(): string{
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    private _apellidos: string;
    public get apellidos(): string{
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }

    private _edad: number;
    public get edad(): number{
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }

    private _dni: string;
    public get dni(): string{
        return this._dni;
    }
    public set dni(value: string) {
        this._dni = value;
    }

    private _cumpleaños: string;
    public get cumpleaños(): string{
        return this._cumpleaños;
    }
    public set cumpleaños(value: string) {
        this._cumpleaños = value;
    }

    private _colorFavorito: string;
    public get colorFavorito(): string{
        return this._colorFavorito;
    }
    public set colorFavorito(value: string) {
        this._colorFavorito = value;
    }

    private _sexo: string;
    public get sexo(): string{
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }

    private _direcciones: Direccion[] = [];
    public get direcciones(): Direccion[]{
        return this.direcciones;
    }
    public set direcciones(value: Direccion[]) {
        this._direcciones = value;
    }

    private _mails: Mail[] = [];
    public get mails(): Mail[] {
        return this._mails;
    }
    public set mails(value: Mail[]) {
        this._mails = value;
    }

    private _telefonos: telefono[] = [];
    public get telefonos(): telefono[] {
        return this._telefonos;
    }
    public set telefonos(value: telefono[]) {
        this._telefonos = value;
    }

    private _notas: string;
    public get notas(): string {
        return this._notas;
    }
    public set notas(value: string) {
        this._notas = value;
    }

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: string, colorFavorito: string, sexo: string, direcciones: Direccion, mails: Mail, telefonos: telefono, notas: string) 
    {
        this._nombre =  nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones.push(direcciones);
        this._mails.push(mails);
        this._telefonos.push(telefonos);
        this._notas = notas;
    }
}