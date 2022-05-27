import { Injectable,HttpException } from '@nestjs/common';
import {USERS} from '../mocks/users.mock';

@Injectable()
export class UsersService {

    users = USERS;

    getUsers(): Promise<any> {
        return new Promise (resolve=>{
            resolve(this.users);
        });
    }

    getUser(userId): Promise<any> {
        return new Promise (resolve=>{

            const user = this.users.find(user=> user.id === Number(userId))

            if (!user) {

                throw new HttpException('User not found', 404);
            }
            resolve (user)
        });

    }

    addUser(user): Promise<any> {

        return new Promise (resolve=>{

           // this.users.push(user);
            resolve(this.users);
        });
    }

    deleteUser(userId): Promise<any> {

        return new Promise(resolve => {
            console.log(userId)
            let index = this.users.findIndex(user => user.id === Number(userId));
            console.log(index)
            if (index === -1) {
                throw new HttpException('User does not exist!', 404);
            }
            this.users.splice(index,1);
            resolve(this.users);
        });
    }
}
