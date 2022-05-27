import { Controller, Get, Param, Post, Body, Query, Delete,ParseIntPipe ,UsePipes} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import {JoiValidationPipe} from 'src/validators/validator.service';
import * as Joi from 'Joi';

@Controller('users')
export class UsersController {

    
    constructor(private UsersService: UsersService) {}


    @Get() 
    async getUsers () {
        const users = await this.UsersService.getUsers();
        return users;
    }

    @Get(':userId')
    async getUser(@Param('userId',ParseIntPipe) userId) {
        const user = await this.UsersService.getUser(userId);
        return user;
    }

    @Post()
    @UsePipes(new JoiValidationPipe(Joi.object().keys({ 
        id: Joi.number().required(),
        name: Joi.string().required(),
        address: Joi.string().required(),
        age: Joi.number().required(),
      })))
    async addUser(@Body() createUserDTO:CreateUserDTO) {
        const user = await this.UsersService.addUser(createUserDTO);
        return user;
    }

    @Delete()
    async deleteUser(@Param('userId',ParseIntPipe) userId) {
        const user = await this.UsersService.deleteUser(userId);
        return user;
    }


}
