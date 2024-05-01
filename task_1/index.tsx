import React, { Component } from "react";

type IUser = {
  name: string;
  age: number;
};

type IProps = {
  user: IUser;
};

// functional component
const FirstComponent = React.memo(({ name, age }: IUser) => (
  <div>
    my name is {name}, my age is {age}
  </div>
));

// functional component
// Этот компонент является необязательным для выполнения задания, но продемонстрирует глубину знаний в React.
const SecondComponent = React.memo(({ user: { name, age } }: IProps) => (
  <div>
    my name is {name}, my age is {age}
  </div>
));

// class component
class ThirdComponent extends PureComponent<IUser> {
  render() {
    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

// class component
class FourthComponent extends PureComponent<IProps> {
  render() {
    const { user } = this.props;
    return (
      <div>
        my name is {user.name}, my age is {user.age}
      </div>
    );
  }
}
