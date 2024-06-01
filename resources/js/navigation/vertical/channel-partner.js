export default [

    {
      title: 'Dashboard',
      icon: { icon: 'tabler-smart-home' },
      to: 'dashboard',
    },

    {
      title: 'New Application',
      icon: { icon: 'tabler-apps' },
      to: 'application-new',
    },

    {
      title: 'Application History',
      icon: { icon: 'tabler-apps' },
      to: 'application',
    },

    {
      title: 'Record',
      icon: { icon: 'tabler-files' },
      children: [
        {
          title: 'All Record',
          to: 'record',

        },
        {
          title: 'University',
          to: 'record-university',

        },

        {
          title: 'Intake',
          to: 'record-intake',

        },


      ],
    },



  ]
