interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Viewer'],
  tenantName: 'Team',
  applicationName: 'Tasky',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage list', 'Manage task', 'Manage user', 'Manage team'],
  getQuoteUrl: 'https://app.roq.ai/proposal/8ec33c61-5c05-4530-b04b-9e4909ea59ff',
};
