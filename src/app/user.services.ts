import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService{
    activeUsers=['Max','Anna'];
    innactiveUsers=['Chris','Manu'];

    constructor(private counterService: CounterService){}

    setToActive(id:number){
        this.activeUsers.push(this.innactiveUsers[id]);
        this.innactiveUsers.splice(id,1);
        this.counterService.incrementInactiveToActive();
    }
    setToInactive(id:number){
        this.innactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id,1);
        this.counterService.incrementActiveToInactive();
    }
}