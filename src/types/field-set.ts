import Collaborator from './collaborator';
import Attachment from './attachment';

export default interface FieldSet {
  [key: string]:
    | undefined
    | unknown
    | string
    | number
    | boolean
    | Collaborator
    | ReadonlyArray<Collaborator>
    | ReadonlyArray<string>
    | ReadonlyArray<Attachment>;
}
