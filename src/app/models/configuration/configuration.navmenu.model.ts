export class ConfigurationNavMenu {
  public id: string;
  public parentId?: string;
  public title: string;
  public desc: string;
  public url: string;
  public children: Array<ConfigurationNavMenu>;
  public icon: string;
}
