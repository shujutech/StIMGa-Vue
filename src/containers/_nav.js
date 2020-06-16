export default [
  {
    _name: 'CSidebarNav',
    _children: [

      /*
      {
        _name: 'CSidebarNavItem',
        name: '',
        to: '/',
      },
      */

      {
        _name: 'CSidebarNavTitle',
        _children: ['CORE']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Customer',
        route: '#',
        icon: 'cil-calculator',
        items: [
          {
            name: 'Create / Modify Customer',
            to: '/cust-create'
          },
        ]
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-2'
      }


    ]
  }
]