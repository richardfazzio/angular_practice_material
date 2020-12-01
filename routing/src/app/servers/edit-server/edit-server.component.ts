import { query } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-gaurd.service';

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
    server: { id: number; name: string; status: string; allowEdit: boolean };
    serverName = '';
    serverStatus = '';
    allowEdit = false;
    changeSaved = false;

    constructor(
        private serversService: ServersService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        console.log(this.route.snapshot.queryParams);
        console.log(this.route.snapshot.fragment);
        this.server = this.serversService.getServer(1);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
        this.allowEdit = this.server.allowEdit;
        this.route.queryParams.subscribe((queryParams: Params) => {
            console.log(queryParams);
            this.allowEdit = queryParams.allowEdit === 'true';
            console.log(this.allowEdit);
        });
        console.log(this.allowEdit);
        // this.route.fragment.subscribe();
    }

    onUpdateServer() {
        this.serversService.updateServer(this.server.id, {
            name: this.serverName,
            status: this.serverStatus,
            allowEdit: this.allowEdit,
        });
        this.changeSaved = true;
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.allowEdit) {
        return true;
      }
      if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changeSaved) {
        return confirm('Do you want to discard changes?');
      }
      return true;
    }
}
