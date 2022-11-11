import { api } from "src/boot/axios";

export function getUsers() {
    return api.get("/users");
}

export function saveUser(usuario) {
    return api.post("/saveUser", usuario);
}