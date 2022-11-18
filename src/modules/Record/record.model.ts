import User from "@modules/User/user.model";
import { Column, Entity, JoinTable, ManyToOne, ObjectID, ObjectIdColumn } from "typeorm";

@Entity("Record")
class Record {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  start: Date;

  @Column()
  end: Date;

  @ManyToOne(() => User)
  @JoinTable({
    name: "User",
    joinColumns: [{ name: "name" }],
    inverseJoinColumns: [{ name: "start" }, { name: "end" }],
  })
  user: User;
}

export default Record;
