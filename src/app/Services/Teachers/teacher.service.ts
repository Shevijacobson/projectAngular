import { Injectable } from '@angular/core';
import { Teacher } from '../../Models/Teacher';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  manager:Teacher={
    Id: '0000',
    FirstName: 'shevi',
    LastName: 'Jacobson',
    Password: '0000',
    Access:0
      }
    t1:Teacher={
    Id: '1111',
    FirstName: 'Bat Sheva',
    LastName: 'choanim',
    Password: '1111',
    Access:1
  }
  t2:Teacher={
    Id: '333235014',
    FirstName: 'Shulamit',
    LastName: 'Ji',
    Password: '1234',
    Access:1
  }
  t3:Teacher={
    Id: '8825484626',
    FirstName: 'Sarit',
    LastName: 'Chohen',
    Password: '111',
    Access:1
  }
  t4:Teacher={
    Id: '152568563',
    FirstName: 'lealola',
    LastName: 'Chohen',
    Password: '1259',
    Access:1
  }
  t5:Teacher={
    Id: '214375552',
    FirstName: 'Naama',
    LastName: 'Rozental',
    Password: '9999',
    Access:1
  }
teachers:Teacher[]=[this.manager,this.t1,this.t2,this.t3,this.t4,this.t5]

  constructor() { }

}
