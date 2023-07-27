package com.java.bookmovie.model;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.NotFound;

@Entity
@Table(name="Contacts")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String email;
    private String address;
}
