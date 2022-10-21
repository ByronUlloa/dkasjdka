export interface mensajess {
    profesor:{
    materia: string;
    seccion: number;
    mensaje: string;
    profesor: string,
    id: string}
} 
export interface UserI{
    nombre : string;
    correo: string;
    uid: string;
    password: string;
    perfil: 'estudiante'|'profesor'
}