﻿namespace Backend.Entity
{
    public class UserEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public int Empresa_Id { get; set; }
    }
}
