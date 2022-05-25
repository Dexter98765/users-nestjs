import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private UserServices: UsersService) {}


    @Get() 
    async getUsers () {
        const users = await this.UserServices.getUsers();
        return users;
    }

    @Get(':userId')
    async getUser(@Param('userId') userId) {
        const user = await this.UserServices.getUser(userId);
        return user;
    }

    @Post()
    async addUser(@Body() createUserDTO:CreateUserDTO) {
        const user = await this.UserServices.addUser(createUserDTO);
        return user;
    }

    @Delete()
    async deleteUser(@Query() query) {
        const user = await this.UserServices.deleteUser(query.userId);
        return user;
    }


}
