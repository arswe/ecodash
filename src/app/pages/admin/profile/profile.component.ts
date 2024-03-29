import { Component, OnInit, inject, signal } from '@angular/core'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'

import { User } from '@@models/user.models'
import { AuthService } from '@@services/auth.service'

@Component({
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export default class ProfileComponent implements OnInit {
  hide = true
  protected authService = inject(AuthService)
  protected userForm!: FormGroup
  protected user = signal<User | null>(null)

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
    })

    this.getUser()
  }

  getUser() {
    this.authService.me().subscribe({
      next: (response) => {
        this.user.set(response)

        this.userForm = new FormGroup({
          username: new FormControl(response?.username ?? '', [Validators.required]),
          email: new FormControl(response?.email ?? '', [Validators.required, Validators.email]),
          firstName: new FormControl(response?.firstName ?? '', [Validators.required]),
          lastName: new FormControl(response?.lastName ?? '', [Validators.required]),
          address: new FormControl(response?.address.address ?? '', [Validators.required]),
          city: new FormControl(response.address.city ?? '', [Validators.required]),
          state: new FormControl(response?.address.state ?? '', [Validators.required]),
          postalCode: new FormControl(response?.address.postalCode ?? '', [Validators.required]),
        })
      },
    })
  }
}
