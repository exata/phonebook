namespace phonebook.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PersonAddColuns : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.People", "Email", c => c.String());
            AddColumn("dbo.People", "Phone", c => c.String(maxLength: 14));
            AddColumn("dbo.People", "Street", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.People", "Street");
            DropColumn("dbo.People", "Phone");
            DropColumn("dbo.People", "Email");
        }
    }
}
