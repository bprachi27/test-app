import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';


interface FoodNode{
  name: String;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Team-1',
    children: [
      {
        name: 'leader-1',
        children: [
          {name: 'Sales'},
          {name: 'Support'}
        ]
      },
      {
        name: 'leader-2',
        children: [
          {name: 'Sales'},
          {name: 'Support'}
        ]
      },
    ]
  },
  {
    name: 'Developer',
    children: [
      {name: 'shift-1'},
      {name: 'shift-2'}
    ]
  }
]
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  // private _transformer 

  // treeControl = new FlatTreeControl<ExampleFlatNode>(
  //   node => node.level,
  //   node => node.expandable
  // )

  // treeFlateener = new MatTreeFlattener(
  //   (node: FoodNode, level: number) => {
  //     return {

  //     }
  //   }
  // )

  // dataSource = new MatTreeFlatDataSource(this.treeControl,)
  public departments = [
    {'id': 1, 'name': 'sales'},
    {'id': 2, 'name': 'support'},
    {'id': 3, 'name': 'developers'},
  ]


}
