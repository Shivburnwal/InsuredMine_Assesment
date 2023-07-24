import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(users: any[], searchUser: string): any[] {
    if (!users || !searchUser) {
      return users;
    }

    searchUser = searchUser.toLowerCase();
    
    
    return users.filter(item => {
      // Customize the property to be searched as per your data structure
      const searchProperty = item.name.toLowerCase(); // Change 'name' to the property you want to search in

      return searchProperty.includes(searchUser);
    });
  }

}
