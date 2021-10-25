import { Component, OnInit } from '@angular/core';
import { Minion, MinionLabResults } from '../models/minion.model';

@Component({
  selector: 'app-minion-lab',
  templateUrl: './minion-lab.component.html',
  styleUrls: ['./minion-lab.component.scss']
})
export class MinionLabComponent implements OnInit {

  constructor() { }

  minions: Minion[] = [
    {
      id: 0,
      name: 'Sombras errantes',
      price: 1
    },
    {
      id: 1,
      name: 'Soldadinho',
      price: 5
    },
    {
      id: 2,
      name: 'Soldado Grande',
      price: 20
    },
    {
      id: 3,
      name: 'Soldado Aéreo',
      price: 50
    },
    {
      id: 4,
      name: 'Soldado Superior',
      price: 100
    }
  ]

  labResults: MinionLabResults[] = []

  ngOnInit(): void {
    this.labResults = JSON.parse(localStorage.getItem('labResults') ?? '[]')
  }

  buyMinion(minion: Minion) {
    let found = this.labResults.find(m => m.minionId === minion.id)
    if (found)
      found.quantity++
    else
      this.labResults.push({ minionId: minion.id, quantity: 0 })

    localStorage.setItem('labResults', JSON.stringify(this.labResults))
  }

  minionName(id: number) {
    return this.minions.find(m => m.id === id)?.name ?? ''
  }

  minionPrice(minion: Minion): number {
    let qtd = this.labResults.find(m => m.minionId === minion.id)?.quantity ?? 1;
    return minion.price + (minion.price * 0.1 * qtd)
  }
}
