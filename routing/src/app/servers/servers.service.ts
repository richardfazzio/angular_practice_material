export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online',
      allowEdit: true,
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline',
      allowEdit: false,
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline',
      allowEdit: true,
    },
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find((s) => {
      return s.id === id;
    });
    return server;
  }

  updateServer(
    id: number,
    serverInfo: { name: string; status: string; allowEdit: boolean }
  ) {
    const server = this.servers.find((s) => {
      return s.id === id;
    });
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
      server.allowEdit = serverInfo.allowEdit;
    }
  }
}
